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
end