export default {
  entry: 'build/es5/ngx-typed-forms.js',
  dest: 'dist/ngx-typed-forms.es5.js',
  sourceMap: true,
  exports: 'named',
  moduleName: 'ngx-typed-forms',
  globals: {
    '@angular/form': 'ng.form',
    '@angular/core': 'ng.core',
    '@angular/core/testing': 'ng.core.testing',
    '@angular/compiler': 'ng.compiler',
    '@angular/compiler/testing': 'ng.compiler.testing'
  }
};
