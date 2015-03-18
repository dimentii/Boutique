using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Web.Infrastructure;

namespace Web.Controllers
{
    public class UploadingController : ApiController
    {
        [ValidateMimeMultipartContentFilter]
        public async Task Post()
        {
            try
            {
                var path = HttpContext.Current.Server.MapPath("~/Uploads/");
                var streamProvider = new FileCorrectorMultipartFormDataStreamProvider(path);
                var files = await Request.Content.ReadAsMultipartAsync(streamProvider).ContinueWith(t =>
                {
                    if(t.IsFaulted || t.IsCanceled)
                    {
                        throw new HttpResponseException(HttpStatusCode.InternalServerError);
                    }

                    var fileInfo = streamProvider.FileData.Select(i => new FileInfo(i.LocalFileName));
                    return fileInfo;
                });

                var result = files.ToList();

                var fileNames = streamProvider.FileData.Select(entry => entry.LocalFileName).ToList();
                var names = streamProvider.FileData.Select(entry => entry.Headers.ContentDisposition.FileName).ToList();
                var contentTypes = streamProvider.FileData.Select(entry => entry.Headers.ContentType.MediaType).ToList();
                var name = streamProvider.FormData["name"];
                var email = streamProvider.FormData["email"];
                var phone = streamProvider.FormData["phone"];
                var comments = streamProvider.FormData["comments"];
            }
            catch(Exception exception)
            {
                var message = exception.Message;
            }
        }
    }
}
