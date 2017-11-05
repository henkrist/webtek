<%@ Language="VBscript" %>
<html>
<head>
<title>Submitted data</title>
</head>

<body>
<%
    name=Request.Form("fname")
    email=Request.Form("email")
    subject=Request.From("subject")
    message=Request.Form("message")
    

    response.Write("Name: " & fname & "<br>")
    response.Write("E-mail: " & email & "<br>")
    response.Write("Subject " & subject & "<br>")
    response.Write("Message: " & message & "<br>")
%>
</body>
</html>