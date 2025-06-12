# Brewery ERP — Custom Vertical Operations for Independent Breweries

Full brewery operations: grain to glass — inventory lots, recipes, brew/fermentation, TTB compliance, supplier/customer, sales, financials, tailored to brewery workflow.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite + Chart.js
- **15 Apps:** inventory, batches, recipes, production, compliance, supplier, customers, sales, financials, quality, equipment, warehouse, api, frontend, analytics

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t brewery-erp .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A brewery worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Inventory:** grains/hops/yeast lots with FIFO, expiry, lot genealogy
- **Recipes:** BJCP style, grain bill, hop schedule (60min boil), yeast pitch
- **Production:** mashing 152°F, boiling, fermentation 68°F 14d, conditioning
- **TTB Compliance:** COLA, Brewer's Report of Operations, excise tax
- **Financials:** COGS per bbl, ledger, P&L, keg deposits

## License
Proprietary — All rights reserved (Brewery Labs).
