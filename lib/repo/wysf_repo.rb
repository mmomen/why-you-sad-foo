require 'pg'

module Wysf

  class DataRepo
    @@db = PG.connect(dbname: 'wysf-db')

    def self.create_table
      command = <<-SQL
      CREATE TABLE IF NOT EXISTS data(
        id SERIAL,
        click_time INTEGER,
        img_count INTEGER,
        PRIMARY KEY( id )
      );
      SQL

      @@db.exec(command)
    end

    def self.insert_time(time, img_count)
      create_table
      command = <<-SQL
      INSERT INTO data( click_time, img_count )
      VALUES ( '#{time}', '#{img_count}' )
      RETURNING *;
      SQL

      result = @@db.exec(command)
      data = result.values[0]

      seconds = data[1].to_i / 1000
      readable_time = Time.at(seconds).strftime("%H:%M:%S")

      Wysf::DataEntity.new(data[0], readable_time, data[2])
    end

    def self.get_all
      command = <<-SQL
        SELECT * FROM data;
      SQL

      result = @@db.exec(command)
      result.map{|time| time["click_time"].to_i}
    end

    def self.get_click_time(id)
      command = <<-SQL
      SELECT * FROM data
      WHERE id = '#{id}';
      SQL

      result = @@db.exec(command)
      data = result.values[0]

      seconds = data[1].to_i / 1000
      readable_time = Time.at(seconds).strftime("%H:%M:%S")

      Wysf::DataEntity.new(data[0], readable_time, data[2])
    end

    def self.get_average_time
      command = <<-SQL
      SELECT AVG(click_time) FROM data;
      SQL

      result = @@db.exec(command)
      data = result.values[0]

      seconds = data[0].to_i / 1000
      Time.at(seconds).strftime("%H:%M:%S")
    end


  end
end