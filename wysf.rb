require 'pg'

module Wysf
  class DataEntity
    attr_reader :id, :click_time, :img_count
    def initialize(id, click_time, img_count)
      @id = id
      @click_time = click_time
      @img_count = img_count
    end

  end
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

      result = @@db.exec(command);
      data = result.values[0]
      p data

      seconds = data[1].to_i / 1000
      readable_time = Time.at(seconds).strftime("%H:%M:%S")

      Wysf::DataEntity.new(data[0], readable_time, data[2])
    end
  end
end