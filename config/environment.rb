# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Camcommand::Application.initialize!

Mime::Type.register "txt", :txt
