var data = {
	Title:"用户登录",
	Account: "账号",
	passWord:"密码",
	accountTips: "请输入账号",
	pwdTips: "请输入密码",
	Pattern: "^\d{8,}$"  
	
	
};
var Login = React.createClass({
	
    render:function() {
        return (
        	<div className="login">
	        		<form class="bs-example bs-example-form" role="form">
	        			<h3>{this.props.data.Title}</h3>
			        	<div className="input-group">
			        		<span className="input-group-addon">{this.props.data.Account}</span>
			        		<input type="text" placeholder={this.props.data.accountTips} className="form-control" required="required" pat></input>
			        	</div>
			        	<div className="input-group">
			        		<span className="input-group-addon">{this.props.data.passWord}</span>
			        		<input type="password" placeholder={this.props.data.pwdTips} className="form-control" required="required" pattern={this.props.data.pattern}></input>
			        	</div>
			        	<button type="submit" className = "btn btn-info btn-lg btn-block">登&nbsp;&nbsp;录</button>
			        	<span className="foot">
			        		<a>忘记密码?</a>
			        		<a>去注册</a>
			        	</span>
			        </form>
    		</div>
    			);
    }
});

ReactDOM.render(<Login data={data}></Login>,document.getElementById('example'));