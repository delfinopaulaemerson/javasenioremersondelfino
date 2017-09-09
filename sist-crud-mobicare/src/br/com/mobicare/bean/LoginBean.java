package br.com.mobicare.bean;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;

import org.apache.log4j.Logger;

import br.com.mobicare.model.User;
import br.com.mobicare.service.AuthenticationService;

/**
 * 
 * @author emerson
 * 
 */
@ManagedBean(name="loginBean")
@RequestScoped
public class LoginBean{

	
	private static Logger logger = Logger.getLogger(LoginBean.class);

	@ManagedProperty(value = "#{authenticationService}")
	private AuthenticationService authenticationService;

	private String userName;
	private String password;
	private User user;
	
	
	public LoginBean(){
		user = new User();
	}
	
	
	
	/**
	 * metodo reponsavel pelo login da aplicacao
	 * @return
	 */
	public String login() {
		boolean success;

		try {
			if(user == null){
				
				this.setUser(new User());
			}
			success = authenticationService.login(userName, password);
			if (!success) {
				FacesMessage facesMessage = new FacesMessage(
						FacesMessage.SEVERITY_ERROR, "",
						"Login ou senha inválidos");
				FacesContext.getCurrentInstance()
						.addMessage(null, facesMessage);
				return "/index";
			}
			
		} catch (Exception e) {
			logger.error("Erro ao Logar a aplicação" + e.getMessage());
			FacesMessage sucesso = new FacesMessage(
					FacesMessage.SEVERITY_ERROR, "",
					"Favor contactar o administrador");
			FacesContext.getCurrentInstance().addMessage(null, sucesso);
			return "/index";
		}

		return "/begin/begin";
	}

	public String logout() {
		authenticationService.logout();
		return "login";
	}
	
	
	
	
	
	/**
	 * direciona a para o cadastro de usuario
	 * @return
	 */
	public String doCadastoUsuario() {
		
		if(user == null){
			
			this.setUser(new User());
		}
		
		limpaComponente(user);

		return "/cadastrologin/cadastro.xhtml";
	}
	
	/**
	 * limpa os componentes
	 * @param user
	 */
	public void limpaComponente(User user){
		
		this.user = new User();
		this.setPassword("");
		this.setUserName("");
		
		
	}



	public String getUsuarioLogado() {
		return authenticationService.getUsuarioLogado().getUsername();
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(final String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(final String password) {
		this.password = password;
	}
	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public AuthenticationService getAuthenticationService() {
		return authenticationService;
	}

	public void setAuthenticationService(
			final AuthenticationService authenticationService) {
		this.authenticationService = authenticationService;
	}
	
}
