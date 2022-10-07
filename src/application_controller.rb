# class ApplicationController < Sinatra::Base
#     set :default_content_type, 'application/json'
    
#     # Add your routes here
#     get "/farmers/:username" do
#       farmer = Farmer.find_by_username(params[:username])
#         if farmer
#           farmer.to_json(include: [:plants])
#         else
#           status 401
#           { errors: "user doesn't exist" }.to_json
#         end
#     end
#   end
  