using System.Web;
using Abp.Localization.Sources.Xml;

namespace APSS.Web.Localization.APSS
{
    public class APSSLocalizationSource : XmlLocalizationSource
    {
        public APSSLocalizationSource()
            : base("APSS", HttpContext.Current.Server.MapPath("/Localization/APSS"))
        {
        }
    }
}