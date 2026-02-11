import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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
  Deletion,
  DeleteButton,
} from './styles.js';

import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import api from '../../../services/api.js';
import { ErrorMessage } from '../../../layouts/AdminLayout/styles.js';

/* =========================
   🔹 SCHEMA (EDIT)
========================= */

const schema = Yup.object({
  name: Yup.string().min(4, 'Mínimo de 4 caracteres').required('O nome do produto é obrigatório'),
  price: Yup.string()
    .matches(/^\d{1,7}$/, 'Preço inválido')
    .required('O preço é obrigatório'),
  category_id: Yup.string().required('A categoria é obrigatória'),
  offer: Yup.boolean(),
  file: Yup.mixed().test('fileType', 'Formato inválido', (value) => {
    if (!value?.length) return true;
    return ['image/png', 'image/jpeg', 'image/webp'].includes(value[0].type);
  }),
});

/* =========================
   🔹 COMPONENTE
========================= */

export function EditProduct() {
  const [filename, setFilename] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* =========================
     🔹 PROTEÇÃO E PREENCHE FORM
  ========================== */

  useEffect(() => {
    if (!product) {
      navigate('/admin/products');
      return;
    }

    setValue('name', product.name);
    setValue('price', (product.price / 100).toString());
    setValue('category_id', product.category_id);
    setValue('offer', !!product.offer);
  }, [product, navigate, setValue]);

  /* =========================
     🔹 CARREGA CATEGORIAS
  ========================== */

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
  ========================== */

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', Math.round(Number(data.price) * 100));
      formData.append('category_id', data.category_id);
      formData.append('offer', data.offer ? 'true' : 'false');

      if (data.file?.length) {
        formData.append('file', data.file[0]);
      }

      await toast.promise(api.put(`/products/${product.id}`, formData), {
        pending: 'Atualizando produto...',
        success: 'Produto atualizado com sucesso!',
        error: 'Erro ao atualizar produto.',
      });

      setTimeout(() => navigate('/admin/produtos'), 2000);
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      toast.error('Erro ao atualizar produto.');
    }
  };

  /* =========================
     🔹 DELETE
  ========================== */

  const handleDelete = async () => {
    if (!window.confirm('Tem certeza que deseja excluir o produto?')) return;

    try {
      await toast.promise(api.delete(`/products/${product.id}`), {
        pending: 'Excluindo produto...',
        success: 'Produto excluído com sucesso!',
        error: 'Erro ao excluir produto.',
      });

      navigate('/admin/produtos');
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      toast.error('Erro ao excluir produto.');
    }
  };

  if (!product) return null;

  /* =========================
     🔹 JSX
  ========================== */

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* NOME */}
        <InputGroup>
          <Label>
            <LocalOfferIcon /> Nome do produto
          </Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </InputGroup>

        {/* PREÇO */}
        <InputGroup>
          <Label>
            <AttachMoneyIcon /> Preço
          </Label>
          <Input type="text" inputMode="numeric" maxLength={7} {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </InputGroup>

        {/* IMAGEM */}
        <InputGroup>
          <LabelUpload>
            <ImageIcon /> Enviar nova imagem (opcional)
            <Input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => {
                setValue('file', e.target.files);
                setFilename(e.target.files?.[0]?.name || null);
              }}
            />
            {filename || 'Nenhum arquivo selecionado'}
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </InputGroup>

        {/* CATEGORIA */}
        <InputGroup>
          <Label>
            <CategoryIcon /> Categoria
          </Label>
          <Select {...register('category_id')}>
            <option value={String(product.category_id)}>{product.category?.name}</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
          <ErrorMessage>{errors.category_id?.message}</ErrorMessage>
        </InputGroup>

        {/* OFFER */}
        <InputGroup>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input
              className="checkbox"
              type="checkbox"
              {...register('offer')}
              defaultChecked={product.offer}
            />
            <Label>Produto em Oferta ?</Label>
          </div>
        </InputGroup>

        <SubmitButton type="submit">Salvar alterações</SubmitButton>
      </Form>

      <Deletion>
        <DeleteButton className="delete" type="button" onClick={handleDelete}>
          Excluir produto
        </DeleteButton>
      </Deletion>
    </Container>
  );
}
