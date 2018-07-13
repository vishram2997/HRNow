import { getAuthorizationHeaderValue, postUrl } from './config';

const buildItemLines = itemLines => itemLines.map(itemLine =>
  `<n:lines>${itemLine.barCodeData},${itemLine.barCodeItem.no},${itemLine.quantity},${itemLine.itemCost},${itemLine.barCodeItem.uom}</n:lines>`);

export const postToServer = ({
  submissionId, transactionType, store, transactionDate, vendorId,
  referenceNumber, receiverName, returnReasonCode, invoiceReferenceImage, signatureImage
}, itemLines, callback, successCallback) => {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState !== 4) {
      return;
    }

    if (xmlhttp.status === 200) {
      successCallback();
      callback.call(xmlhttp, 200);
    } else {
      callback.call(xmlhttp);
    }
  };

  // Header -- SubmissionId,TransType,Store,TransactionDate,VendorCode,RefNo,ReceiverName,
  //            ReturnReasonCode
  // Line -- Barcode,ItemId,Qty,Price,UoM

  const body = `
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body xmlns:n="urn:microsoft-dynamics-schemas/codeunit/WebInvoice">
        <n:UpdateMobData xmlns="WebInvoiceNS">
          <n:header>${submissionId},${transactionType},${store},${transactionDate},${vendorId},${referenceNumber},${receiverName},${returnReasonCode}</n:header>
          ${buildItemLines(itemLines).join('')}
          <n:signature>${signatureImage}</n:signature>
          <n:attachment>${invoiceReferenceImage}</n:attachment>
        </n:UpdateMobData>
      </soap:Body>
    </soap:Envelope>
  `;

  console.log(body);

  xmlhttp.open('POST', postUrl);
  xmlhttp.setRequestHeader('Content-type', 'text/xml; charset=utf-8');
  xmlhttp.setRequestHeader('Content-length', body.length);
  xmlhttp.setRequestHeader('SOAPAction', 'UpdateMobData');
  xmlhttp.setRequestHeader('Authorization', getAuthorizationHeaderValue());
  xmlhttp.send(body);
};

export const fetchWrapper = (url, authorizationHeaderValue = '', method = 'OPTIONS') => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
  };

  headers = authorizationHeaderValue ?
    { ...headers, Authorization: authorizationHeaderValue } : headers;

  return fetch(url, {
    method,
    headers
  });
};
