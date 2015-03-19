using System;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Web.Infrastructure
{
    public class FileCorrectorMultipartFormDataStreamProvider : MultipartFormDataStreamProvider
    {
        public FileCorrectorMultipartFormDataStreamProvider(String path)
            : base(path)
        { }

        public override String GetLocalFileName(HttpContentHeaders headers)
        {
            var name = !String.IsNullOrWhiteSpace(headers.ContentDisposition.FileName) ? headers.ContentDisposition.FileName : "NoName";
            return name.Replace("\"", String.Empty); //this is here because Chrome submits files in quotation marks which get treated as part of the filename and get escaped
        }
    }
}