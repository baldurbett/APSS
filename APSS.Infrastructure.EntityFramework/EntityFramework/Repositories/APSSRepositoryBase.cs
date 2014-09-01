using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Abp.Domain.Entities;
using Abp.Domain.Repositories.EntityFramework;

namespace APSS.EntityFramework.Repositories
{
    public abstract class APSSRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<APSSDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
    }

    public abstract class APSSRepositoryBase<TEntity> : APSSRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {

    }
}
