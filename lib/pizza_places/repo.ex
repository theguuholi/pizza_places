defmodule PizzaPlaces.Repo do
  use Ecto.Repo,
    otp_app: :pizza_places,
    adapter: Ecto.Adapters.Postgres
end
