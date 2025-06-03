FROM python:3.8-slim-bullseye

WORKDIR /app

COPY requirements.txt .
RUN apt-get update && apt-get upgrade -y && apt-get dist-upgrade -y && apt-get autoremove -y && apt-get clean && \
    pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt
COPY . .
COPY static/ ./static/
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "10000"]