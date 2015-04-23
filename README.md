# node-sass-error-demo

run `grunt`

this will compile sass from `src` using the `node-sass` api that is wrapped in a custom grunt task. you should see an error 

```
>> invalid selector after
>>   Line 33  Column 14  node_modules/css-smart-grid/sass/smart-grid-columns.scss
```

now comment out the `column-set` mixin in `node_modules/css-smart-grid/scss/smart-grid.scss` on line 21

```
@media (min-width:$columns-break-point) {
    @include column-set;
}
```

at this point the error should no be thrown

versions of `node-sass/libsass` are as follows

```
  "version": "3.0.0-beta.7",
  "libsass": "3.2.0-beta.6",
```

