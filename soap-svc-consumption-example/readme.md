We’ll show how easy Node.js & some community plugins make integrating with this SOAP service.

Most business systems and services talk something called XML. SOAP is a protocol built on top of XML which was popular in the late 90’s, early 2000’s. Although no longer in-vogue, many services – especially in the business world – talk SOAP.

WSDL Preamble
One of the pieces of this integration puzzle we’ll encounter today is something called a WSDL. This definition describes the web service to a system and the responses we can expect.
Developers often use a WSDL in conjunction with a UI tool like SoapUI, which illustrates how the service works.

We’re going to load this WSDL into a Node.js SOAP client, but it helps to have a rough idea of how the service works first – what params it expects, and what the output will look like. SoapUI can help with this.
