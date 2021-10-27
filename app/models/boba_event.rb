class BobaEvent < ApplicationRecord
  validates :open_spaces, presence: true
  validates :open_spaces, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 6, only_integer: true }

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User
end
