 <div ng-controller="loginCtrl">
 <form action="/" id="loginForm">
     <div>
         UserName : <input type="text" name="username" ng-model="username"/></br></br>
         Password : <input type="password" name="password" ng-model="password"/>
         <button type="button" ng-click="submit()">Login</button>
     </div>
 </form>
</div>