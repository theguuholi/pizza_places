defmodule PizzaPlacesWeb.PageController do
  use PizzaPlacesWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
