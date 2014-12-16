require 'sinatra'
require 'sinatra/json'
require "sinatra/reloader"
require 'pry-byebug'

require_relative 'lib/wysf_helper.rb'

set :bind, '0.0.0.0'
set :port, 10101

get '/' do
  send_file "index.html"
end

post '/done' do
  @click_time = params[:elapsed_time]
  @img_count = 0

  @data = Wysf::DataRepo.insert_time(@click_time, @img_count)

  redirect to("/stats/#{@data.id}") #prevents reinserting the same data on refresh
end

get '/stats/:id' do
  @id = params[:id]
  @data = Wysf::DataRepo.get_click_time(@id)
  @avg = Wysf::DataRepo.get_average_time
  @test = Wysf::DataRepo.get_all
  @test2 = @test.map do |time|
    (time/1000).round
  end

  erb :stats
end

get '/display.html' do
  send_file "display.html"
end