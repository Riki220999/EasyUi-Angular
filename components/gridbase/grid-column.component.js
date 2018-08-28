/**
 * EasyUI for Angular 1.0.1
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,ContentChild,Input}from"@angular/core";import{HeaderTemplateDirective,CellTemplateDirective,EditTemplateDirective,FooterTemplateDirective,FilterTemplateDirective}from"../base/template-base";import{domHelper}from"../base/domhelper";var GridColumnComponent=function(){function GridColumnComponent(){this.field=null,this.title=null,this.rowspan=1,this.colspan=1,this.sortable=!1,this.editable=!1,this.order="asc",this.frozen=!1,this.align=null,this.halign=null,this.sorter=null,this.headerCls=null,this.headerStyle=null,this.cellCss=null,this.expander=!1,this.filterable=!0,this.filterOperators=[],this.currOrder=null,this.grid=null,this._filterOperator="contains",this._filterValue=null,this._isFiltering=!1,this._initialized=!1}return Object.defineProperty(GridColumnComponent.prototype,"filterOperator",{get:function(){return this._filterOperator},set:function(value){this._filterOperator=value},enumerable:!0,configurable:!0}),Object.defineProperty(GridColumnComponent.prototype,"filterValue",{get:function(){return this._filterValue},set:function(value){var _this=this;this._filterValue=value,!this._isFiltering&&this._initialized&&(this._isFiltering=!0,setTimeout(function(){""==_this._filterValue||null==_this._filterValue?(_this._filterOperator=null,_this.grid.removeFilterRule(_this.field),_this.grid.doFilter()):_this.filterOperator&&(_this.grid.addFilterRule({field:_this.field,op:_this.filterOperator,value:_this.filterValue}),_this.grid.doFilter()),_this._isFiltering=!1},this.grid.filterDelay))},enumerable:!0,configurable:!0}),GridColumnComponent.prototype.ngOnInit=function(){this.width=domHelper.toStyleValue(this.width)},GridColumnComponent.prototype.ngAfterViewInit=function(){var _this=this;setTimeout(function(){return _this._initialized=!0})},GridColumnComponent}();export{GridColumnComponent};GridColumnComponent.decorators=[{type:Component,args:[{selector:"eui-grid-column",template:""}]}],GridColumnComponent.ctorParameters=function(){return[]},GridColumnComponent.propDecorators={headerTemplate:[{type:ContentChild,args:[HeaderTemplateDirective]}],cellTemplate:[{type:ContentChild,args:[CellTemplateDirective]}],editTemplate:[{type:ContentChild,args:[EditTemplateDirective]}],footerTemplate:[{type:ContentChild,args:[FooterTemplateDirective]}],filterTemplate:[{type:ContentChild,args:[FilterTemplateDirective]}],field:[{type:Input}],title:[{type:Input}],width:[{type:Input}],rowspan:[{type:Input}],colspan:[{type:Input}],sortable:[{type:Input}],editable:[{type:Input}],order:[{type:Input}],frozen:[{type:Input}],align:[{type:Input}],halign:[{type:Input}],sorter:[{type:Input}],headerCls:[{type:Input}],headerStyle:[{type:Input}],cellCss:[{type:Input}],expander:[{type:Input}],filterable:[{type:Input}],filterOperators:[{type:Input}],filterOperator:[{type:Input}],filterValue:[{type:Input}]};