FROM python:3.6.4-alpine3.7

ARG options
COPY ./requirements.txt /
COPY ./extensions /extensions
RUN apk --update add git
RUN pip install -r /requirements.txt
RUN cd /extensions/code-highlight/ && python setup.py develop
