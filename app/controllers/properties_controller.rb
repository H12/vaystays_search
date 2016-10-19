class PropertiesController < ApplicationController
  def index
    @properties = Property.order(:tiebreaker_sort)
  end

  def show
    @property = Property.find(params[:id])
  end
end
