"""empty message

Revision ID: 4d63257043e4
Revises: c274d85f1254
Create Date: 2020-02-21 15:33:18.758776

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4d63257043e4'
down_revision = 'c274d85f1254'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('userdetail', sa.Column('username', sa.String(length=64), nullable=True))
    op.drop_constraint('userdetail_userrname_key', 'userdetail', type_='unique')
    op.create_unique_constraint(None, 'userdetail', ['username'])
    op.drop_column('userdetail', 'userrname')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('userdetail', sa.Column('userrname', sa.VARCHAR(length=64), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'userdetail', type_='unique')
    op.create_unique_constraint('userdetail_userrname_key', 'userdetail', ['userrname'])
    op.drop_column('userdetail', 'username')
    # ### end Alembic commands ###
