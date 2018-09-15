# DjangoとNginxのTips

* 作成日：2017年12月06日
* 公開日：2018年09月15日

## Unix Sockertを使う

```nginx
upstream blog_app_server {
  # fail_timeout=0 means we always retry an upstream even if it failed
  # to return a good HTTP response (in case the Unicorn master nukes a
  # single worker for timing out).

  server unix:/opt/example.com/run/gunicorn.sock fail_timeout=0;
}

server {
    listen       80;
    server_name  www.example.com example.com;
    server_tokens off;
    access_log /opt/example.com/logs/nginx-access.log;
    error_log /opt/example.com/logs/nginx-error.log;

    location /static/ {
        alias /opt/example.com/static/;
    }

    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        if (!-f $request_filename) {
            proxy_pass http://blog_app_server;
            break;
        }
    }

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
```

## Dockerの場合

Docker間はVolumeでマウントする

[What's should Django ALLOWED_HOSTS be when using a unix socket?
](https://stackoverflow.com/questions/24830276/whats-should-django-allowed-hosts-be-when-using-a-unix-socket)


## uWsgi

Nginx: プロキシ・リバースプロキシ・WEBサーバー
Gunicorn: APサーバー
uWsgi: GateWay, Interface

### 公式ページ

- [Nginx](https://nginx.org/)
- [Gunicorn - Python WSGI HTTP Server for UNIX](http://gunicorn.org/)
- [PEP 333 -- Python Web Server Gateway Interface v1.0](https://www.python.org/dev/peps/pep-0333/)

### 参考


- [Flask + uWSGI + Nginx でハローワールドするまで @ さくらのVPS (CentOS 6.6)](https://qiita.com/morinokami/items/e0efb2ae2aa04a1b148b)
- [1台のサーバ上にDockerを使って複数サービス運用してみる](https://qiita.com/hacoten/items/0fb1a44390e1af35b50c)
- [DockerでPython+uWSGI+Nginxの環境を作成](https://qiita.com/hiroykam/items/748c3fab31c616994db9)
- [docker-compose up で Django + PostgreSQL + Nginx + Gunicorn を起動してみる](https://qiita.com/cortyuming/items/25e3e19beb1516e1d0be)
- [Deploy Django, Gunicorn, NGINX, Postgresql using Docker](http://ruddra.com/2016/08/14/docker-django-nginx-postgres/index.html)
- [Djangoの環境をDocker化する（Docker + Django + Gunicorn + nginx）その１](https://qiita.com/amazipangu/items/bce228f506f894cd825d)