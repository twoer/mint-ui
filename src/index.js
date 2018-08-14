import Button from '../packages/button';
import Cell from '../packages/cell';
import Field from '../packages/field';
import Switch from '../packages/switch';
import TabItem from '../packages/tab-item';
import TabContainerItem from '../packages/tab-container-item';
import TabContainer from '../packages/tab-container';
import Radio from '../packages/radio';
import Navbar from '../packages/navbar';
// import '../src/assets/font/iconfont.css';

const version = '2.2.9';
const install = function(Vue) {
  if (install.installed) return;

  Vue.component(Button.name, Button);
  Vue.component(Cell.name, Cell);
  Vue.component(Field.name, Field);
  Vue.component(Switch.name, Switch);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainerItem.name, TabContainerItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(Radio.name, Radio);
  Vue.component(Navbar.name, Navbar);
  // Vue.use(InfiniteScroll);
  // Vue.use(Lazyload, {
  //   loading: require('./assets/loading-spin.svg'),
  //   try: 3
  // });

  // Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  // Vue.$toast = Vue.prototype.$toast = Toast;
  // Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version,
  Button,
  Cell,
  Field,
  Switch,
  TabItem,
  TabContainerItem,
  TabContainer,
  Radio,
  Navbar
};
