require 'sinatra'
require 'sinatra/json'
require "sinatra/reloader"
require 'pry-byebug'

require_relative 'wysf.rb'

set :bind, '0.0.0.0'
set :port, 10101

get '/' do
  send_file "index.html"
end

post '/done' do
  @click_time = params[:elapsed_time]
  @img_count = 0

  @data = Wysf::DataRepo.insert_time(@click_time, @img_count)

  erb :stats
end