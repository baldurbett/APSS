using Abp.Web.Mvc.Views;

namespace APSS.Web.Views
{
    public abstract class APSSWebViewPageBase : APSSWebViewPageBase<dynamic>
    {

    }

    public abstract class APSSWebViewPageBase<TModel> : AbpWebViewPage<TModel>
    {
        protected APSSWebViewPageBase()
        {
            LocalizationSourceName = "APSS";
        }
    }
}