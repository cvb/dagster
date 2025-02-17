"""add range index

Revision ID: 17154c80d885
Revises: f78059038d01
Create Date: 2022-01-20 11:45:26.092743

"""
from dagster.core.storage.migration.utils import create_run_range_indices

# revision identifiers, used by Alembic.
revision = "17154c80d885"
down_revision = "f78059038d01"
branch_labels = None
depends_on = None


def upgrade():
    create_run_range_indices()


def downgrade():
    pass
