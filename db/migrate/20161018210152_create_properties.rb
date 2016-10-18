class CreateProperties < ActiveRecord::Migration[5.0]
  def change
    create_table :properties do |t|

        t.string :title
        t.string :why_stay_here
        t.float :lat
        t.float :lng
        t.integer :num_bedrooms
        t.float :num_bathrooms
        t.integer :sleeps_comfortably
        t.integer :sleeps_max
        t.string :primary_small_image_url
        t.string :url
        t.integer :nightly_from
        t.integer :nightly_rate
        t.text :showcased_features, array: true
        t.string :city
        t.string :province
        t.string :country
        t.float :user_rating
        t.integer :num_reviews
        t.float :vaystays_weight
        t.float :tiebreaker_sort

      t.timestamps
    end
  end
end
