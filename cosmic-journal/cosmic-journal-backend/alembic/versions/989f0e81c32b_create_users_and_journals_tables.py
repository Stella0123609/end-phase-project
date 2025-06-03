revision = '989f0e81c32b'
down_revision = None
branch_labels = None
depends_on = None

from alembic import op
import sqlalchemy as sa

def upgrade():
    op.create_table(
        "users",
        sa.Column("id", sa.Integer(), primary_key=True, index=True),
        sa.Column("email", sa.String(), unique=True, index=True),
        sa.Column("hashed_password", sa.String())
    )
    op.create_table(
        "journals",
        sa.Column("id", sa.Integer(), primary_key=True, index=True),
        sa.Column("text", sa.String(), nullable=False),
        sa.Column("date", sa.Date(), nullable=False),
        sa.Column("city", sa.String(), nullable=False),
        sa.Column("mood", sa.String(), nullable=True),
        sa.Column("star_map", sa.JSON(), nullable=True)
    )

def downgrade():
    op.drop_table("journals")
    op.drop_table("users")