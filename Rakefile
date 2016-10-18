# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

namespace :db do
  desc 'This rebuilds development db'
  task  :yolo => ["db:drop", "db:create", "db:migrate", "db:seed"]
end

Rails.application.load_tasks
