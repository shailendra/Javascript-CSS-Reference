window.objLib = window.objLib || {};
(function () {
   var Backend = function (prop) {
      this.initialize(prop);
   };
   var p = Backend.prototype

   p.initialize = function (prop) {
      var This = this;
      this.SERVER_ASP = "ASP.Net";
      this.SERVER_PHP = "PHP";
      this.backendPath = this.getRelativePath(0);
      this.serverType = this.SERVER_PHP;
      if (prop.server != undefined && prop.server == this.SERVER_ASP) {
         this.serverType = this.SERVER_ASP;
      }
      //----------------------------------------------
      //----------------------------------------------
      //----------------------------------------------
      //----------------------------------------------
      this.secreteKey = "xzxzxzxzxxzxzxzx";
      this.cryptoKey = this.secreteKey;
      //----------------------------------------
      //----------------------------------------
      //----------------------------------------
      //----------------------------------------
      this.cryptoParam = {
         mode: CryptoJS.mode.CBC,
         padding: CryptoJS.pad.Pkcs7
      }
      //---------------------------------------
      if (this.serverType == this.SERVER_ASP) {
         //---- setting crypto parameter for ASP.Net ------------
         var kk = this.cryptoKey;
         this.cryptoKey = CryptoJS.enc.Utf8.parse(kk);
         this.cryptoIV = CryptoJS.enc.Utf8.parse(kk);
         this.cryptoParam = {
            keySize: 128 / 8,
            iv: this.cryptoIV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
         }
      } else if (this.serverType == this.SERVER_PHP) {
         //---- setting crypto parameter for PHP ------------
         this.cryptoParam = {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
         }
      }
      //--------------------------------------------------------------
      //--------------------------------------------------------------
      /*this.submitBtn = $("#form_screen .submit");
      this.submitBtn.bind("click", function () { This.onSubmitClick(); })*/
   };
   p.onSubmitClick = function () {
      var This = this;
      function setEventAndReturnRef(str) {
         var input = $(str);
         input.bind("input change focus", function (e) {
            errMsgDiv.css({ display: "none" });
            errMsgDiv.removeClass("blinking");
         });
         return input;
      }
      var errMsgDiv = setEventAndReturnRef(".errMsg");
      var nameInput = setEventAndReturnRef(".nameInput");
      var emailInput = setEventAndReturnRef(".emailInput");
      var mobileInput = setEventAndReturnRef(".mobileInput");
      //
      var name = nameInput.val().trim();
      var email = emailInput.val().trim();
      var mobile = mobileInput.val().trim();
      var score = this.base.scoreBoard.totalScore;
      /*console.log("name - "+name);
      console.log("email - "+email);
      console.log("mobile - "+mobile);
      console.log("score - "+score);*/
      //----------------------------------------------------         
      //----------------------------------------------------         
      function showError(param) {
         errMsgDiv.html(param.msg)
         errMsgDiv.css({ display: "block" });
         errMsgDiv.addClass("blinking");
         param.targetInput.before(errMsgDiv);
         This.submitBtn.css({ pointerEvents: "auto" });
      }
      //--------------------------------------------------

      //---- V A L I D A T I O N   S T A R T  ------------
      //--------------------------------------------------
      if (this.validWhiteBlankEmptySpace(name)) {
         showError({ msg: "Type Your Name", targetInput: nameInput });
         return;
      }
      else if (this.validateOnlyA_Z(name)) {
         showError({ msg: "Invalid Name", targetInput: nameInput });
         return;
      }
      //--------------------------------------------------
      else if (this.validWhiteBlankEmptySpace(email)) {
         showError({ msg: "Type Your Email ID", targetInput: emailInput });
         return;
      }
      else if (this.validateEmail(email)) {
         showError({ msg: "Invalid Email ID", targetInput: emailInput });
         return;
      }
      //--------------------------------------------------  
      else if (this.validWhiteBlankEmptySpace(mobile)) {
         showError({ msg: "Type Your Mobile Number", targetInput: mobileInput });
         return;
      }
      else if (this.validMobileNumber(mobile)) {
         showError({ msg: "Invalid Mobile Number", targetInput: mobileInput });
         return;
      }
      //------ E N D -------------------------------------
      //--------------------------------------------------
      //
      //
      //--------------------------------------------------
      //---  S E N D I N G   T O   S E R V E R   ---------
      var formData = {
         name: name,
         email: email,
         mobile: mobile,
         score: score
      }
      var ajaxOption = {
         formData: JSON.stringify(formData),
         relativeURL: "submit-form-ajax-strong-hitter.php",
         method: "POST",
         contentType: "application/x-www-form-urlencoded; charset=UTF-8",
         dataType: "text",
         resolve: function (jsonObj) {
            //console.log(jsonObj); 
            //--- On Response -----              
            if (jsonObj.status == true) {
               var encode = encodeURIComponent(window.btoa(score));
               //console.log(encode);
               window.location = "leader-board.php?p=" + encode;
            } else {
               This.submitBtn.css({ pointerEvents: "auto" });
            }
         },
         reject: function (jsonObj) {
            //--- On error -----            
            This.submitBtn.css({ pointerEvents: "auto" });
         }
      }
      this.sendPostRequest(ajaxOption);
      this.submitBtn.css({ pointerEvents: "none" });
      //--------------------------------------------------
      //--------------------------------------------------
   }

   p.sendPostRequest = function (prop) {
      var This = this;
      var url = "";
      if (prop.relativeURL) {
         url = this.backendPath + prop.relativeURL;
      } else if (prop.absoluteURL) {
         url = prop.absoluteURL;
      }
      var encryptedStr = this.cryptoEncrypt({ str: prop.formData });
      var newEncryptedObj = { d: encryptedStr };
      var newJSONStr = JSON.stringify(newEncryptedObj);

      function success(response) {
         //console.log("response --- ", " - ", response);
         if (This.serverType == This.SERVER_ASP) {
            var encryptedStr = JSON.parse(response).d;
            var actualJsonStr = This.cryptoDecrypt({ str: encryptedStr });
            //console.log("actualJsonStr --- ", " - ", actualJsonStr);
            var data = JSON.parse(actualJsonStr);
         } else {
            //-- for PHP not try encryption
            //-- need RnD Find Solution with backend Team                
            var data = JSON.parse(response);
            //-------------------------------------------
         }

         if (prop.resolve) {
            prop.resolve(data);
         }
      }
      function error(response) {
         console.log("errorResponse - ", response.responseText);
         if (prop.reject) {
            prop.reject({ success: false, data: response });
         }
      };
      function complete(data) {
      };
      var ajaxOption = {
         method: prop.method ? prop.method : "GET",
         data: this.serverType == this.SERVER_PHP ? JSON.parse(newJSONStr) : newJSONStr,
         url: url,
         crossDomain: true,
         contentType: prop.contentType ? prop.contentType : "application/json; charset=utf-8",
         dataType: prop.dataType ? prop.dataType : "text",
         success: success,
         error: error,
         complete: complete
      }
      if (prop.contentType != undefined) {
         ajaxOption.contentType = prop.contentType;
      }
      if (prop.datatype != undefined) {
         ajaxOption.datatype = prop.datatype;
      }
      //console.log(ajaxOption);
      $.ajax(ajaxOption);
   }
   //-------------------------------------------------------------------------
   //-------------------------------------------------------------------------
   //-------------------------------------------------------------------------
   p.cryptoEncrypt = function (prop) {
      if (this.serverType == this.SERVER_ASP) {
         // for ASP.Net Encryption ---------------
         var str_1 = prop.str.replace(/[{]/g, "curleyfront");
         var str_2 = str_1.replace(/[}]/g, "curleyback");
         var encryptedString = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(str_2), this.cryptoKey, this.cryptoParam).toString();
         return encryptedString;
      }
      //--- for PHP Encryption -------------------
      var str_1 = prop.str;
      var encryptedString = CryptoJS.AES.encrypt(str_1, this.cryptoKey, this.cryptoParam).toString();
      return encryptedString;
   }
   p.cryptoDecrypt = function (prop) {
      if (this.serverType == this.SERVER_ASP) {
         // for ASP.Net DeEncryption ---------------
         var decryptStr = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(prop.str, this.cryptoKey, this.cryptoParam));
         var str_1 = decryptStr.replace(/curleyfront/g, "{");
         var str_2 = str_1.replace(/curleyback/g, "}");
         return str_2;
      }
      //--- for PHP DeEncryption -------------------
      var decryptStr = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(prop.str, this.cryptoKey, this.cryptoParam));
      var str_1 = decryptStr;
      return str_1;
   }
   //-------------------------------------------------------------------------
   //-------------------------------------------------------------------------
   //-------------------------------------------------------------------------
   p.validateEmail = function (email) {
      var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (reg.test(email)) {
         return false;
      } else {
         return true;
      }
   }
   p.validateOnlyA_Z = function (text) {
      if (!/^[a-z A-Z]*$/g.test(text)) {
         return true;
      }
      return false;

   }
   p.validMobileNumber = function (mobile) {
      var mob = /^(\+[\d]{1,5}|0)?[6-9]\d{9}$/;
      if (mob.test(mobile)) {
         return false;
      }
      return true;
   }
   p.validateOnlyNumbers = function (text) {
      if (!/^[0-9]*$/g.test(text)) {
         return true;
      }
      return false;
   }
   p.validWhiteBlankEmptySpace = function (text) {
      if (/\S/.test(text)) {
         return false;
      }
      return true;
   }
   p.disableCopyPasteCut = function (input) {
      $(input).bind('cut copy paste', function (e) {
         e.preventDefault();
      });
   }
   p.getRelativePath = function (BackLevel) {
      if (BackLevel == undefined || BackLevel == null) {
         BackLevel = 0;
      }
      var TempVar = "\j";
      var UrlString = unescape(window.location.href);
      //
      var TempUrlArray = UrlString.split("/");
      for (var i = -1; i < BackLevel; i++) {
         TempUrlArray.pop();
      }
      var RalativePath = TempUrlArray.join("/") + "/";
      return RalativePath;
   };

   objLib.Backend = Backend;
}());