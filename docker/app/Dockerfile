FROM php:8.0-fpm

RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
vim \
wget

RUN apt-get install -y \
  # for zip
  zlib1g-dev \
  libzip-dev \
  # for gd
  libfreetype6-dev \
  libjpeg62-turbo-dev \
  libpng-dev

# Laravel：requested PHP extensions
RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
    && docker-php-ext-install -j$(nproc) bcmath pdo_mysql zip gd opcache

# Composer
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER 1
