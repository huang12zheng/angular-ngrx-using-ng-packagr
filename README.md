# MyApp

## Steps to reproduce error
```
npm install
ng-packagr -p ng-package.json
```
below is the error coming
```
PS Z:\rupesh\rnd\angular\ngrx-with-ng-packgr\my-app> ng-packagr -p ng-package.jsonBuilding Angular library
Generating bundle for my-app
Cleaning bundle build directory
Processing assets
Running ngc

BUILD ERROR
Error at Z:/rupesh/rnd/angular/ngrx-with-ng-packgr/my-app/.ng_pkg_build/my-app/ts/src/app/app.component.ts:34:14: Exported variable 'getProductState' has or is using name 'MemoizedSelector' from external module "Z:/rupesh/rnd/angular/ngrx-with-ng-packgr/my-app/node_modules/@ngrx/store/src/selector" but cannot be named.
Error: Error at Z:/rupesh/rnd/angular/ngrx-with-ng-packgr/my-app/.ng_pkg_build/my-app/ts/src/app/app.component.ts:34:14: Exported variable 'getProductState' has or is using name 'MemoizedSelector' from external module "Z:/rupesh/rnd/angular/ngrx-with-ng-packgr/my-app/node_modules/@ngrx/store/src/selector" but cannot be named.
    at new UserError (C:\Users\rtiwari\AppData\Roaming\npm\node_modules\ng-packagr\node_modules\@angular\tsc-wrapped\src\tsc.js:27:28)
    at check (C:\Users\rtiwari\AppData\Roaming\npm\node_modules\ng-packagr\node_modules\@angular\tsc-wrapped\src\tsc.js:93:15)
    at Tsc.typeCheck (C:\Users\rtiwari\AppData\Roaming\npm\node_modules\ng-packagr\node_modules\@angular\tsc-wrapped\src\tsc.js:173:9)
    at C:\Users\rtiwari\AppData\Roaming\npm\node_modules\ng-packagr\node_modules\@angular\tsc-wrapped\src\main.js:122:23
    at <anonymous>
```

