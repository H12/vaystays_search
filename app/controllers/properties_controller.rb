class PropertiesController < ApplicationController
  def index
    @properties = Property.all
  end

  def show

  end
end
