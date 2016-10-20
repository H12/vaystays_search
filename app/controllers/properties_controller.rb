class PropertiesController < ApplicationController
  def index
    @properties = Property.order(tiebreaker_sort: :desc)
    @max_guests = @properties.map(&:sleeps_max).max
  end

  def show
    @property = Property.find(params[:id])
  end
end
