
# Projede Geliştirme Yapmak

Angular projesini çalıştırmak için bazı gereklilikler mevcuttur.

## Gereklilik

[nodejs](https://nodejs.org/en/) 'in kurulu olduğundan mutlaka emin olunuz.

Node.js'in kurulu olduğunu konsoldan `node -v` yazarak öğrenebilirsiniz.

Kullandığınız işletim sistemine göre paket yükleme aracı olarak kullanılan uygun [yarn](https://classic.yarnpkg.com/en/docs/install) kurulumunu yapmanız gerekmektedir.

Yarn'ın kurulu olduğunu `yarn --version` yazarak ögrenebilirsiniz.

node.js v8.10.0 veya üstü

angular cli 8 veya üstü

## Adım 1: Angular CLI İndirme

Angular projesini kullanmak veya yeni bir proje kurmak için Angular CLI 'yı indirmek gerekiyor.

```bash
yarn add -g @angular/cli
```

## Adım 2: Projeyi Github'dan Çekme

Projeyi Github'dan çektikten sonra konsola `yarn install` veya `yarn` yazarak node modules'ü indirebiliriz. Node modules olmadan proje çalışmayacaktır.

```bash
yarn install
```

## Adım 3: Uygulamayı Çalıştırma

Öncelikle projenin kurulduğu frontend dizinine gidilir ve `yarn start` komutu ile proje çalıştırılır.

```bash
yarn start -o
```

`-o` ile browserda  http://localhost:4200/  direkt olarak proje görüntülenebilir.
