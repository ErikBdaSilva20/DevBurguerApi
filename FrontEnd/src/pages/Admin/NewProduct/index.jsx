import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  SubmitButton,
  LabelUpload,
  Select,
} from './styles.js';
import { toast } from 'react-toastify';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useEffect, useState } from 'react';
import api from '../../../services/api.js';
import { ErrorMessage } from '../../../layouts/AdminLayout/styles.js';
import { useNavigate } from 'react-router-dom';

/* =========================
   🔹 VALIDAÇÃO
========================= */

const schema = Yup.object({
  name: Yup.string().min(5, 'Mínimo de 5 caracteres').required('O nome do produto é obrigatório'),
  price: Yup.number().positive('O preço deve ser positivo').required('O preço é obrigatório'),
  category_id: Yup.string().required('A categoria é obrigatória'),
  offer: Yup.bool(),
  file: Yup.mixed()
    .required('A imagem é obrigatória')
    .test('fileExists', 'Arquivo inválido', (value) => {
      return value instanceof FileList && value.length > 0;
    })
    .test('fileType', 'Formato inválido (.webp, .jpeg, .png)', (value) => {
      return value && value[0] && ['image/webp', 'image/jpeg', 'image/png'].includes(value[0].type);
    })
    .test('fileSize', 'O arquivo é muito grande (máx 5MB)', (value) => {
      return value && value[0] && value[0].size <= 5 * 1024 * 1024;
    }),
});

/* =========================
   🔹 COMPONENTE
========================= */

export function NewProduct() {
  const [filename, setFilename] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* =========================
     🔹 CARREGA CATEGORIAS
  ========================= */

  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    }

    loadCategories();
  }, []);

  /* =========================
     🔹 SUBMIT
  ========================= */

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('price', data.price * 100);
      formData.append('category_id', data.category_id);
      formData.append('file', data.file[0]);
      formData.append('offer', data.offer);

      await toast.promise(api.post('/products', formData), {
        pending: 'Adicionando produto...',
        success: 'Produto adicionado com sucesso!',
        error: 'Erro ao adicionar produto.',
      });

      setTimeout(() => {
        navigate('/admin/produtos');
      }, 2000);
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      toast.error('Erro ao adicionar produto.');
    }
  };

  /* =========================
     🔹 JSX
  ========================= */

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>
            <LocalOfferIcon />
            Nome do produto
          </Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>
            <AttachMoneyIcon />
            Preço
          </Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <ImageIcon />
            <span>Enviar imagem</span>

            <Input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => {
                setValue('file', e.target.files, { shouldValidate: true });
                setFilename(e.target.files?.[0]?.name || null);
              }}
            />

            {filename || 'Nenhum arquivo selecionado'}
          </LabelUpload>

          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>
            <CategoryIcon />
            Categoria
          </Label>

          <Select {...register('category_id')}>
            <option value="">Selecione</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>

          <ErrorMessage>{errors.category_id?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input className="checkbox" type="checkbox" {...register('offer')} />
            <Label>Produto em Oferta ?</Label>
          </div>
        </InputGroup>

        <SubmitButton type="submit">Adicionar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
