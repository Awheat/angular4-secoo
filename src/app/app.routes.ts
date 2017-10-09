/**
 * Created by Administrator on 2017/9/5.
 */
 
export const Routes = [
  {
    path: '',
    redirectTo:'index',
    pathMatch:'full'
  },
  {
    path: 'index',
    loadChildren: './index/index.module#IndexModule'
  },
  {
  	path: 'category',
  	loadChildren: './category/category.module#CategoryModule'
  },
  {
    path: 'hot',
    loadChildren: './hot/hot.module#HotModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  },
  {
    path: 'my',
    loadChildren: './my/my.module#MyModule'
  },
  {
    path:'**',
    loadChildren:'./index/index.module#IndexModule'
  }
];
