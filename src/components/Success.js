
export default function Success({count, setSuccess}){
    return (
        <div className="success-block">
          <img src="/assets/success.png" alt="Success" />
          <h3>Успішно!</h3>
          <p>Всім {count} користувачам надіслано запрошення.</p>
          <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
        </div>
      );
}