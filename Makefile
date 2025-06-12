build:
	docker build -t brewery-erp .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
