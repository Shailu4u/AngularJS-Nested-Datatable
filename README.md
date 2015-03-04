# AngularJS Nested DataTable
**AngularJS Nested DataTable** is a AngularJS custom directive which is easy to use, custom element, nesting tables and extensible. All default dataTable functionalities such as sorting, pagination, search etc will also work in this directive too.
### Current Version 0.1.0

## Getting started
* Optionally: to install with bower, use:
```js
	bower install --save ng-nested-datatable
```

* Link scripts:

```html
<link href="//cdn.datatables.net/1.10.5/css/jquery.dataTables.css" rel="stylesheet" />
<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="src/ng-nested-datatable.js"></script>
```

* AngularJS Nested DataTable custom element: 

```html
<ng-nested-table data="tableData"
				 outer-table-config="outerDefaults"
				 inner-table-config="innerDefaults">
</ng-nested-table>
```
tableData, outerDefaults and innerDefaults are the $scope variables in MyController

## Install

* Download all dependencies using bower: 
```js
	bower install
```

## Params

| Key                       |  Values     |  Description                                       |
| --------------------------|:-----------:|----------------------------------------------------|
| data                      |  Object     | All table data supplied to custom element          |
| outerTableConfig		    |  Object	  | Outer DataTable Configuration					   |
| innerTableConfig          |  Object	  | Inner DataTable Configuration                      |

		
## Author
**Shailendra Kumar**

## Copyright
Copyright © 2015 [Shailendra Kumar](http://masterofweb.in).

## License 
AngularJS Nested DataTable is under MIT license - http://www.opensource.org/licenses/mit-license.php