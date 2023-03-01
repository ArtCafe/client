import React from "react";
import Modal from "react-modal";
import Comment from "../post/comment/Comment";

const CommentModal =({postId}) => {

  //https://github.com/ArtCafe/dfg.git
   
  
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const customStyles = {
      content: {
        width: 500,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
     
      },
    };
  
   // let subtitle;
    
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
     // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
   
  
    return (
   
    <div>
           <button
        className="w3-button w3-theme-d1 w3-margin-bottom w3-grey" 
        onClick={openModal}>comment</button>
     <Modal
       appElement={document.getElementById('app')}
       isOpen={modalIsOpen}
       onAfterOpen={afterOpenModal}
       onRequestClose={closeModal}
       style={customStyles}
       contentLabel="Example Modal"
     >
       <button onClick={closeModal} > x </button>
       <div>
       
     
                          <Comment postId={postId}/>
                      
    
       </div>
        </Modal>
  
    </div> 
  
    );
  }
  
  

export default CommentModal