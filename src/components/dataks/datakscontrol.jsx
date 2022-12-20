import React from "react";
import { Button, Modal, InputGroup,Form, ModalFooter, ModalHeader, ModalBody } from "react-bootstrap";
import { ref as ref_database, onValue, remove,get,child, update,set } from "firebase/database";
import StartFireBase from "../../firebase2";
import { storage } from "../../firebase";
import { uploadBytes,ref as ref_storage,getDownloadURL, listAll,uploadBytesResumable } from "firebase/storage";
import "./datakscontrol.scss"
import { Dataks} from "./dataks";
import { ThirtyFpsSelect } from "@mui/icons-material";

const db = StartFireBase()


export class Datakscontrol extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            imagedata:[],
            imageUpload:null,
            mode:'',
            isOpen: false,
            record:{
                username:props.username,
                name:props.record.name,
                price:props.record.price,
                star:props.record.star,
                img:props.record.img,
                
            },
            modusername:'', 
            modname:'',
            modprice:'',
            modstar:'',
            modimg:''
        }

    }

    uploadImage(){
        if(this.state.imageUpload == null) return;
        const imageRef = ref_storage(storage,this.state.imageUpload.name)
        uploadBytes(imageRef,this.state.imageUpload).then(()=>{
            //this.setState({modimg2:this.state.imageUpload.name})
        })

        const uploadTask = uploadBytesResumable(imageRef, this.state.imageUpload);
        uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                
              });
            }
          );

    }
    


    componentDidMount(){
        
    }


    render(){
        return(
        <>
            <Button variant='primary' className="ms-2" onClick={()=>{this.openModal('add')}}>Thêm hotel</Button>
            <Button variant='warning' className="ms-2"onClick={()=>{this.openModal('edit')}}>Sửa hotel</Button>

            <Modal show={this.state.isOpen}>
                <Modal.Header>
                    <Modal.Title>{(this.state.mode=='add')?'Thêm mới hotel':'Sửa hotel'}</Modal.Title>
                    <Button size='sm' variant='dark'onClick={()=>{this.closeModal()}}>X</Button>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Id</InputGroup.Text>
                        <Form.Control value={this.state.modusername} onChange={e=>{this.setState({modusername: e.target.value})}} 
                        disabled={this.state.mode !='add'}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Tên hotel</InputGroup.Text>
                        <Form.Control value={this.state.modname} onChange={e=>{this.setState({modname: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Giá hotel</InputGroup.Text>
                        <Form.Control value={this.state.modprice} onChange={e=>{this.setState({modprice: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Số sao</InputGroup.Text>
                        <Form.Control value={this.state.modstar} onChange={e=>{this.setState({modstar: e.target.value})}} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text className="input_text">Img url</InputGroup.Text>
                        <Form.Control value={this.state.modimg} onChange={e=>{this.setState({modimg: e.target.value})}} 
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={()=>{(this.interface('add'));this.uploadImage()}} variant='primary' className="ms-2" style={(this.state.mode != 'add')?{display:'none'}:{}}>Thêm mới hotel</Button>
                    <Button onClick={()=>(this.interface('updates'))} variant='success' className="ms-2"style={(this.state.mode == 'add')?{display:'none'}:{}}>Sửa Hotel</Button>
                    <Button onClick={()=>(this.interface('delete'))} variant='danger' className="ms-2"style={(this.state.mode == 'add')?{display:'none'}:{}}>Xóa Hotel</Button>
                    <Form.Control onChange={e=>{this.setState({imageUpload: e.target.files[0]})}} type="file" />
                    <div className="image"> 
                    <img
                        
                        src={
                        this.state.imageUpload
                        ? URL.createObjectURL(this.state.imageUpload)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                    /></div>
                    
                </Modal.Footer>
            </Modal>
            
        </>
        
        )
    }

    openModal(option){
        if(option=='add'){
            this.setState({
                isOpen: true,
                mode:option,
                modusername:'',
                modname:'',
                modprice:'',
                modstar:'',
                modimg:'',

            })
        }else if(option=='edit'){
            let rec=this.state.record;
            this.setState({
                isOpen: true,
                mode:option,
                modusername:rec.username,
                modname:rec.name,
                modprice:rec.price,
                modstar:rec.star,
                modimg:rec.img,
            })
        }
        
    }
    closeModal(){
        this.setState({
            isOpen: false
        })
    }

    getData(){
        return{
            id: this.state.modusername,
            data:{
                name: this.state.modname,
                price: this.state.modprice,
                star: this.state.modstar,
                img:this.state.modimg,
            }
        }
    }

    interface(option){
        if(option=='add')
        this.insertData()
        else if(option=='updates')
        this.updateData()
        else if(option=='delete')
        this.deleteData()

    }

    insertData(){
        const dbRef = ref_database(db)
        const record = this.getData()
        const address='Hotel/'+record.id

        get(child(dbRef,address)).then(snapshot=>{
            if(snapshot.exists()){
                alert('Không thể tạo thêm hotel, đã tồn tại')
            }else{
                set(ref_database(db,address), record.data)
                alert('Thêm hotel thành công')
            }
        })
    }
    updateData(){
        const dbRef = ref_database(db)
        const record = this.getData()
        const address='Hotel/'+record.id

        get(child(dbRef,address)).then(snapshot=>{
            if(snapshot.exists()){
                update(ref_database(db,address), record.data)
                
            }else{
                alert('Không thể update, không tồn tại')
            }
        })
    }
    deleteData(){
        const dbRef = ref_database(db)
        const record = this.getData()
        const address='Hotel/'+record.id

        get(child(dbRef,address)).then(snapshot=>{
            if(snapshot.exists()){
                remove(ref_database(db,address))
                
            }else{
                alert('Không thể xóa, không tồn tại')
            }
        })
    }
}