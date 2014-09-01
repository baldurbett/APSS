using Abp.Web.Mvc.Controllers;

namespace APSS.Web.Controllers
{
    public abstract class APSSControllerBase : AbpController
    {
        protected APSSControllerBase()
        {
            LocalizationSourceName = "APSS";
        }
    }
}