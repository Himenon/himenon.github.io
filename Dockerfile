FROM python:3.6.4-alpine3.7

ARG options
COPY ./requirements.txt /
RUN apk --update add git
RUN pip install -r /requirements.txt
