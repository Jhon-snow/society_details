"""empty message

Revision ID: c274d85f1254
Revises: 
Create Date: 2020-02-21 13:55:30.646436

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c274d85f1254'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('userdetail',
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('userrname', sa.String(length=64), nullable=True),
    sa.Column('address', sa.String(length=100), nullable=True),
    sa.Column('password', sa.String(length=10), nullable=True),
    sa.PrimaryKeyConstraint('name'),
    sa.UniqueConstraint('address'),
    sa.UniqueConstraint('userrname')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('userdetail')
    # ### end Alembic commands ###
