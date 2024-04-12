# syntax=docker/dockerfile:1

FROM python:3.11.4-slim-bullseye as base

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONFAULTHANDLER 1

RUN pip3 install poetry
COPY pyproject.toml poetry.locl ./
RUN poetry config virtualenvs.create false
RUN poetry install --no-root --no-dev

RUN apt-get update && apt-get -y upgrade && \
    apt -get install -y \
    wget \
    unzip \ 
    awscli && \
    apt-get autoclean

COPY . .

WORKDIR /

RUN chmode +x main.py
CMD ["python", "main.py"]