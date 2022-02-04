import PizzaMap from "./pizzaMap";
const HookPizzaMap = {
    mounted() {
       this.map = new PizzaMap(this.el, [51.505, -0.09], 13, event => {})
    }
}

export default HookPizzaMap;